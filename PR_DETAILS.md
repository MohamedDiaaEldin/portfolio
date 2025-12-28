# Pull Request Details

## Title
```
feat: Add clickable company links, dynamic duration, and company badges
```

## Description
```markdown
## Changes

This PR implements the following enhancements to the portfolio:

### 1. Clickable Company Links with Hover Effect
- Added clickable company links for Juthor and Vultara
- Implemented hover underline animation effect
- Links open in new tab with proper security attributes

### 2. Dynamic Duration Calculation
- Created date utility function to calculate duration based on user's local time
- Duration automatically updates for current companies (e.g., "5 months", "1 year 3 months")
- Only calculates for companies where `current: true`

### 3. Company Badges in Projects Section
- Added company badges to projects (Juthor and Vultara)
- Badges display alongside category badges with distinct styling

### 4. Improved Project Descriptions
- Updated Juthor project description with balanced technical and business value details
- Updated Vultara project description highlighting TARA automation and compliance features

## Files Changed
- `src/config/content.js` - Added company URLs, start dates, and updated descriptions
- `src/utils/dateUtils.js` - New utility for duration calculation
- `src/components/Experience.jsx` - Clickable links and dynamic duration
- `src/components/Projects.jsx` - Company badge display

## Testing
- ✅ All linter checks pass
- ✅ Components render correctly
- ✅ Links are functional and accessible
```

## Direct Link to Create PR
https://github.com/MohamedDiaaEldin/portfolio/compare/master...cursor/portfolio-company-link-improvements-5a7a?expand=1

## Branch
`cursor/portfolio-company-link-improvements-5a7a` → `master`
