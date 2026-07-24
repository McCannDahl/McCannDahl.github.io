#!/bin/bash

# Exit if not in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "Error: Not a git repository."
    exit 1
fi

# Set batch size
BATCH_SIZE=3
commit_count=0

echo "Starting batch commits..."

while true; do
    # Get up to BATCH_SIZE unstaged/untracked files (null-terminated to handle spaces in filenames)
    # Status flags: ?? = untracked, M = modified, A = added, D = deleted, R = renamed
    mapfile -d '' -n $BATCH_SIZE FILES < <(git status --porcelain -z | stdbuf -oL cut -z -c 4-)

    # Stop if there are no more files to commit
    if [ ${#FILES[@]} -eq 0 ]; then
        echo "Finished! All changes have been committed."
        break
    fi

    commit_count=$((commit_count + 1))
    echo "----------------------------------------"
    echo "Processing Batch #$commit_count (${#FILES[@]} files)..."

    # Stage the current batch of files
    git add -A -- "${FILES[@]}"

    # Commit the staged batch
    git commit -m "Chore: Batch commit #$commit_count (${#FILES[@]} files)"

    git push

    # Safety pause to give you a moment to cancel (Ctrl+C) if needed
    sleep 1
done