# Stacked PRs

A sandbox repository to test the GitHub stacked pull request feature. A stacked pull request
targets another pull request branch instead of the default branch. This repository gives that
feature a real base branch to work against.

## Step one

This paragraph is the change carried by the first pull request. The second pull request branches
from this commit, so this text must exist before the stack makes sense.

## Planned experiment

1. Create branch `feature/step-one` from `main`. Open a pull request into `main`.
2. Create branch `feature/step-two` from `feature/step-one`. Open a pull request into
   `feature/step-one`.
3. Merge the first pull request. Observe how GitHub retargets the second pull request.
