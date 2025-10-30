import os
import re
from datetime import datetime

# === НАСТРОЙКИ ===
ROOT_DIR = "docs/pe/releases/releases-table"  # путь к папке с .md файлами
DATE_PATTERN = re.compile(r'^release-date:\s*"?([A-Za-z]{3,9}\s+\d{1,2},\s*\d{4})"?', re.MULTILINE)

def parse_date(date_str):
    """Парсит дату вида 'Oct 15, 2025' -> '2025-10-15'"""
    try:
        dt = datetime.strptime(date_str.strip(), "%b %d, %Y")  # формат с коротким месяцем
    except ValueError:
        try:
            dt = datetime.strptime(date_str.strip(), "%B %d, %Y")  # формат с полным названием месяца
        except ValueError:
            return None
    return dt.strftime("%Y-%m-%d")

def process_file(path):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    match = DATE_PATTERN.search(content)
    if not match:
        return False

    original_date = match.group(1)
    iso_date = parse_date(original_date)
    if not iso_date:
        print(f"[SKIP] Невозможно распарсить дату в {path}: {original_date}")
        return False

    # Заменяем значение release-date на ISO
    new_line = f'release-date: "{iso_date}"'
    content_new = DATE_PATTERN.sub(new_line, content)

    with open(path, "w", encoding="utf-8") as f:
        f.write(content_new)

    print(f"[OK] {path} → {original_date} → {iso_date}")
    return True

def main():
    count = 0
    for root, _, files in os.walk(ROOT_DIR):
        for file in files:
            if file.endswith(".md"):
                full_path = os.path.join(root, file)
                if process_file(full_path):
                    count += 1
    print(f"\nГотово ✅ Обновлено файлов: {count}")

if __name__ == "__main__":
    main()
