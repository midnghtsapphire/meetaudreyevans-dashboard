#!/usr/bin/env python3
"""Repository validation checks for ship-to-market readiness."""

from __future__ import annotations

from pathlib import Path
import json
import re
import sys


ROOT = Path(__file__).resolve().parent


REQUIRED_FILES = [
    "README.md",
    "CHANGELOG.md",
    "DEPLOYMENT_GUIDE.md",
    "GO_TO_MARKET.md",
    "GHL_RESEARCH_BASELINE.md",
    ".env.example",
    "Dockerfile",
    "docker-compose.yml",
    "nginx.conf",
]

REQUIRED_DEPENDENCIES = [
    "react",
    "react-dom",
    "react-router-dom",
    "recharts",
    "socket.io-client",
]

REQUIRED_ENV_KEYS = [
    "VITE_API_BASE_URL=",
    "VITE_WEBSOCKET_URL=",
    "VITE_GHL_API_BASE_URL=",
    "VITE_GHL_LOCATION_ID=",
    "VITE_GHL_PRIVATE_INTEGRATION_TOKEN=",
]

DOCKER_PATTERNS = (
    (r"(?m)^FROM\s+node:[\w.-]+\s+AS\s+\w+\s*$", "Dockerfile missing Node multi-stage build alias"),
    (r"(?m)^FROM\s+nginx:[\w.-]+", "Dockerfile missing Nginx runtime stage"),
    (r"(?m)^COPY\s+--from=\w+\s+/app/dist.*$", "Dockerfile missing dist copy from build stage"),
)


def check_required_files() -> list[str]:
    errors: list[str] = []
    for relative_path in REQUIRED_FILES:
        if not (ROOT / relative_path).exists():
            errors.append(f"Missing required file: {relative_path}")
    return errors


def check_package_scripts() -> list[str]:
    errors: list[str] = []
    package_json = ROOT / "package.json"
    if not package_json.exists():
        return ["Missing package.json"]

    data = json.loads(package_json.read_text(encoding="utf-8"))
    scripts = data.get("scripts", {})
    for script_name in ("build", "lint", "dev"):
        if script_name not in scripts:
            errors.append(f"package.json missing '{script_name}' script")
    return errors


def check_dependency_baseline() -> list[str]:
    errors: list[str] = []
    package_json = ROOT / "package.json"
    if not package_json.exists():
        return ["Missing package.json"]

    try:
        data = json.loads(package_json.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        return [f"Invalid package.json JSON: {exc.msg}"]

    dependencies = data.get("dependencies", {})
    for dependency in REQUIRED_DEPENDENCIES:
        if dependency not in dependencies:
            errors.append(f"Missing baseline dependency: {dependency}")
    return errors


def check_readme_sections() -> list[str]:
    errors: list[str] = []
    readme_path = ROOT / "README.md"
    if not readme_path.exists():
        return ["Missing README.md"]

    readme = readme_path.read_text(encoding="utf-8")
    required_headings = ["Overview", "Features", "Quick Start"]

    for heading in required_headings:
        pattern = rf"^##\s+{re.escape(heading)}\s*$"
        if not re.search(pattern, readme, flags=re.IGNORECASE | re.MULTILINE):
            errors.append(f"README.md missing expected heading: {heading}")
    return errors


def check_env_baseline() -> list[str]:
    errors: list[str] = []
    env_example_path = ROOT / ".env.example"
    if not env_example_path.exists():
        return ["Missing .env.example"]

    env_example = env_example_path.read_text(encoding="utf-8")
    for key in REQUIRED_ENV_KEYS:
        if key not in env_example:
            errors.append(f".env.example missing key: {key.rstrip('=')}")
    return errors


def check_market_research_docs() -> list[str]:
    errors: list[str] = []
    baseline_path = ROOT / "GHL_RESEARCH_BASELINE.md"
    if not baseline_path.exists():
        return ["Missing GHL_RESEARCH_BASELINE.md"]

    baseline_doc = baseline_path.read_text(encoding="utf-8")
    required_headings = [
        "## Canonical Documentation Sources",
        "## Core Objects + Baseline Field Contract",
        "## Chatter-Derived Demand Signals (Public Community Themes)",
        "## Integration Structure Baseline for This Repository",
    ]
    for heading in required_headings:
        if heading not in baseline_doc:
            errors.append(f"GHL_RESEARCH_BASELINE.md missing heading: {heading}")
    return errors


def check_docker_baseline() -> list[str]:
    errors: list[str] = []
    dockerfile_path = ROOT / "Dockerfile"
    compose_path = ROOT / "docker-compose.yml"
    nginx_path = ROOT / "nginx.conf"

    if dockerfile_path.exists():
        dockerfile_text = dockerfile_path.read_text(encoding="utf-8")
        for pattern, error_message in DOCKER_PATTERNS:
            if not re.search(pattern, dockerfile_text):
                errors.append(error_message)
    if compose_path.exists():
        compose_text = compose_path.read_text(encoding="utf-8")
        if "services:" not in compose_text:
            errors.append("docker-compose.yml missing token: services:")
        if "ports:" not in compose_text:
            errors.append("docker-compose.yml missing token: ports:")
        if not re.search(r"(?ms)^services:\s*\n(?:\s+[A-Za-z0-9_-]+:\s*\n)+", compose_text):
            errors.append("docker-compose.yml missing at least one declared service")
    if nginx_path.exists():
        nginx_text = nginx_path.read_text(encoding="utf-8")
        if not re.search(r"try_files\s+[$]uri\s+[$]uri/\s+/index\.html\s*;", nginx_text):
            errors.append("nginx.conf missing SPA fallback route")
    return errors


def run_checks() -> list[str]:
    checks = [
        check_required_files,
        check_package_scripts,
        check_dependency_baseline,
        check_readme_sections,
        check_env_baseline,
        check_market_research_docs,
        check_docker_baseline,
    ]

    all_errors: list[str] = []
    for check in checks:
        all_errors.extend(check())
    return all_errors


def main() -> int:
    errors = run_checks()
    if errors:
        print("Validation failed:")
        for error in errors:
            print(f"- {error}")
        return 1

    print("Validation passed: ship-to-market baseline requirements are present.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
