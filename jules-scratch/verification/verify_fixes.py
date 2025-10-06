from playwright.sync_api import sync_playwright, Page, expect

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Arrange: Go to the homepage.
        page.goto("http://localhost:8787/")

        # 2. Screenshot: Capture the page for debugging.
        page.screenshot(path="jules-scratch/verification/verification.png")

        browser.close()

if __name__ == "__main__":
    main()