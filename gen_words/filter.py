import json

max_size = 7
min_size = 4
words = {"dictionary": []}

with open('words.txt', 'r') as f, open('words.json', 'w') as o:
  for word in f.read().strip().split('\n'):
    if min_size <= len(word) <= max_size and word.isalpha() and word.islower():
      words['dictionary'].append(word)
  # write out
  o.write(json.dumps(words))