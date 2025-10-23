import requests


def main():
    response = requests.get("https://example.com")
    print(f"Fetched example.com with status {response.status_code}")

    # Intentional spacing for Black to clean up
    print( "Formatting demo" )


if __name__ == "__main__":
    main()
