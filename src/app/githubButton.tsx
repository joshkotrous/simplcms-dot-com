"use client";
import GitHubButton from "react-github-btn";

export default function GithubButton() {
  return (
    <GitHubButton
      href="https://github.com/joshkotrous/simplcms"
      data-icon="octicon-star"
      data-show-count="true"
      aria-label="Star your-repo on GitHub"
    >
      Star on Github
    </GitHubButton>
  );
}
