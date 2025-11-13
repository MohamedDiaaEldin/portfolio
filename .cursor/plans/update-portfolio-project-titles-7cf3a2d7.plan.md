<!-- 7cf3a2d7-2359-4dec-95d5-7f28d3a01cec fe89cff2-0e36-488c-932b-b230fac33ec9 -->
# Update Portfolio Project Titles and Descriptions

## Changes Required

Update `src/config/content.js` to modify four projects in the `projects` array:

### 1. Deep Learning Integration (id: 4)

- Change title from "Deep Learning Integration" to "AI Integration"
- Remove "production" from description: change "production-level project" to "project"
- Remove "production" from impact: change "production environment" to "environment"

### 2. Automotive Security Suite (id: 2)

- Change title to a descriptive name related to Vultara (e.g., "Vultara Automotive Cybersecurity Platform" or "Automotive Cybersecurity Management System")
- Keep description and other fields unchanged

### 3. University ERP System (id: 3)

- Change title from "University ERP System" to "ERP System"
- Update description to mention infrastructure work: add details about creating database and server environment using Docker and automation scripts
- Update impact text to remove "universities" reference if needed

### 4. Scalable Retail Platform (id: 1)

- Change title from "Scalable Retail Platform" to "Relation and Order Management Platform"
- Keep description and other fields unchanged

## Files to Modify

- `src/config/content.js` - Update the projects array (lines 138-189)

### To-dos

- [ ] Update 'Deep Learning Integration' project: change title to 'AI Integration' and remove 'production' word from description and impact
- [ ] Update 'Automotive Security Suite' project: change title to descriptive name related to Vultara
- [ ] Update 'University ERP System' project: remove 'University' from title and update description to mention infrastructure work with Docker and automation scripts
- [ ] Update 'Scalable Retail Platform' project: change title to 'Relation and Order Management Platform'