import requests


def main():
    response = requests.get("https://example.com")
    print(f"Fetched example.com with status {response.status_code}")
    

if __name__ == "__main__":
    main()
