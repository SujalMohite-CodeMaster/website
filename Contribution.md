# Contributing to Sujal Services and Solutions Website

Thank you for your interest in contributing to our project! We welcome contributions from everyone, whether you're fixing a bug, implementing a new feature, or improving documentation.

## 🎯 Quick Links

- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Issue Tracker](https://github.com/Sujal-Services/sujal-services-website/issues)
- [Project Board](https://github.com/Sujal-Services/sujal-services-website/projects/1)

## 🤔 First Time Contributing?

No problem! Here's a quick guide:

1. **Find an Issue**: Look for issues labeled `good-first-issue` or `help-wanted`
2. **Comment on the Issue**: Let us know you want to work on it
3. **Follow the Steps Below**: We'll guide you through the process

## 🚀 How to Contribute

### 1. Setting Up Your Development Environment

#### Prerequisites
- Git installed on your system
- A GitHub account
- A code editor (VS Code recommended)
- Modern web browser

#### Fork and Clone the Repository

1. **Fork the Repository**
   - Click the "Fork" button at the top right of the repository page
   - This creates your personal copy of the project

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/sujal-services-website.git
   cd sujal-services-website
   ```

3. **Add Upstream Remote**
   ```bash
   git remote add upstream https://github.com/Sujal-Services/sujal-services-website.git
   ```

4. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-description
   ```

### 2. Making Changes

#### Code Style Guidelines

**HTML**
- Use semantic HTML5 elements
- Proper indentation (2 spaces)
- Include alt attributes for images
- Use kebab-case for CSS classes

**CSS**
- Use meaningful class names
- Follow BEM methodology (Block__Element--Modifier)
- Mobile-first approach
- Comment complex sections

**JavaScript**
- Use ES6+ features
- Descriptive variable and function names
- Comment complex logic
- Handle errors appropriately

#### Development Workflow

1. **Sync with Upstream**
   ```bash
   git fetch upstream
   git merge upstream/main
   ```

2. **Make Your Changes**
   - Test your changes in multiple browsers
   - Ensure responsiveness on different screen sizes
   - Follow the existing code style

3. **Test Your Changes**
   - Open `index.html` in your browser
   - Test on mobile, tablet, and desktop views
   - Verify all links and forms work correctly

### 3. Committing Your Changes

#### Commit Message Format
```
type: short description

Longer description if needed. Explain what and why, not how.
Fixes #issue-number
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or modifying tests
- `chore`: Maintenance tasks

**Examples:**
```
feat: add dark mode toggle functionality

- Implement dark/light theme switching
- Add theme persistence using localStorage
- Update all color variables for theming

Closes #15
```

```
fix: correct mobile navigation alignment

- Fix navbar items overlapping on small screens
- Improve touch target sizes for mobile users
- Adjust padding and margins for better spacing

Fixes #8
```

### 4. Submitting a Pull Request

1. **Push Your Changes**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create Pull Request**
   - Go to your fork on GitHub
   - Click "Compare & pull request"
   - Fill in the PR template:

**PR Title:** `feat: Add Dark Mode Toggle`

**PR Description:**
```markdown
## Description
Adds dark mode functionality with theme persistence.

## Changes Made
- Added CSS variables for theming
- Implemented theme toggle button
- Added localStorage for theme persistence
- Updated all color schemes

## Testing
- [ ] Tested on Chrome, Firefox, Safari
- [ ] Verified mobile responsiveness
- [ ] Checked theme persistence across page reloads

## Related Issues
Closes #15

## Screenshots
<!-- Add before/after screenshots if applicable -->
```

3. **Request Review**
   - Assign 1-2 team members as reviewers
   - Add appropriate labels (enhancement, bug, etc.)

### 5. Review Process

- Reviewers will check your code within 48 hours
- They might suggest changes or improvements
- Address all review comments by pushing new commits
- Once approved, your PR will be merged!

## 🐛 Reporting Bugs

When reporting bugs, please include:

1. **Clear Description**: What happened vs. what you expected
2. **Steps to Reproduce**:
   ```
   1. Go to '...'
   2. Click on '....'
   3. Scroll down to '....'
   4. See error
   ```
3. **Screenshots**: If applicable
4. **Environment**:
   - Browser and version
   - Operating system
   - Device type

## 💡 Suggesting New Features

We welcome feature suggestions! Please:

1. Check if a similar feature already exists
2. Explain the problem you're trying to solve
3. Describe your proposed solution
4. Include mockups or examples if possible

## 📋 Issue Labels

We use these labels to organize issues:

- `good-first-issue`: Perfect for new contributors
- `help-wanted`: Extra attention needed
- `bug`: Something isn't working
- `enhancement`: New feature or improvement
- `documentation`: Improvements to docs
- `design`: UI/UX related changes
- `performance`: Speed optimization
- `accessibility`: Improving a11y

## 🏆 Recognition

All contributors will be:
- Listed in our contributors section
- Recognized in release notes
- Celebrated in our community!

## ❓ Need Help?

- **Stuck on something?** Comment on the issue
- **Need coding help?** Ask in the PR discussion
- **General questions?** Create a discussion thread

## 🚨 Important Notes

- **One PR per feature**: Keep changes focused and manageable
- **Test thoroughly**: Make sure your changes don't break existing functionality
- **Be patient**: We're volunteers and will respond as soon as possible
- **Be respectful**: Follow our Code of Conduct

## 🎉 Your First Contribution

We specially welcome first-time contributors! If you're new to open source:

1. Look for issues labeled `good-first-issue`
2. Don't hesitate to ask questions
3. We'll provide extra guidance and support
4. Celebrate your first merged PR! 🎊

---

**Thank you for contributing!** Your help makes this project better for everyone. 💙

*Adapted from [Contributing Template](https://github.com/nayafia/contributing-template)*
