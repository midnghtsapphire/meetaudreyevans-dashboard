#!/usr/bin/env python3
"""Repository validation checks for ship-to-market readiness."""

from __future__ import annotations

from pathlib import Path
import json
import sys


ROOT = Path(__file__).resolve().parent


REQUIRED_FILES = [
    "README.md",
    "CHANGELOG.md",
    "DEPLOYMENT_GUIDE.md",
    "GO_TO_MARKET.md",
    ".env.example",
    "Dockerfile",
    "docker-compose.yml",
]


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


def check_readme_sections() -> list[str]:
    errors: list[str] = []
    readme = (ROOT / "README.md").read_text(encoding="utf-8").lower()
    required_terms = ["overview", "features", "quick start"]

    for term in required_terms:
        if term not in readme:
            errors.append(f"README.md missing expected section/term: {term}")
    return errors


def run_checks() -> list[str]:
    checks = [
        check_required_files,
        check_package_scripts,
        check_readme_sections,
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
