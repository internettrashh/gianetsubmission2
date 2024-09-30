import csv
import os

def extract_tweets_to_md(csv_file_path, md_file_path):
    tweets = []

    # Read the CSV file and extract tweetText
    with open(csv_file_path, 'r', newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            if 'tweetText' in row:
                tweets.append(row['tweetText'].strip())

    # Write tweets to Markdown file
    with open(md_file_path, 'w', encoding='utf-8') as mdfile:
        mdfile.write(', '.join(tweets))

    print(f"Extracted {len(tweets)} tweets to {md_file_path}")

# Usage
csv_file_path = '/workspaces/codespaces-blank/src/dataset/tweets.csv'  # Update this path if necessary
md_file_path = '/workspaces/codespaces-blank/src/dataset/tweets.md'  # Output Markdown file

extract_tweets_to_md(csv_file_path, md_file_path)