/**
 * Calculate duration between start date and current date
 * Returns formatted string like "5 months" or "1 year 3 months"
 * @param {string} startDate - ISO date string (YYYY-MM-DD)
 * @returns {string} Formatted duration string
 */
export const calculateDuration = (startDate) => {
  if (!startDate) return null

  const start = new Date(startDate)
  const now = new Date() // Uses user's local time

  // Validate dates
  if (isNaN(start.getTime()) || isNaN(now.getTime())) {
    return null
  }

  // Calculate difference in months
  const years = now.getFullYear() - start.getFullYear()
  const months = now.getMonth() - start.getMonth()
  
  let totalMonths = years * 12 + months
  
  // Adjust if current day is before start day in the month
  if (now.getDate() < start.getDate()) {
    totalMonths--
  }

  // Handle negative values (shouldn't happen for valid dates)
  if (totalMonths < 0) {
    return null
  }

  // Format output
  if (totalMonths === 0) {
    return "Less than a month"
  } else if (totalMonths < 12) {
    return `${totalMonths} ${totalMonths === 1 ? 'month' : 'months'}`
  } else {
    const years = Math.floor(totalMonths / 12)
    const remainingMonths = totalMonths % 12
    
    if (remainingMonths === 0) {
      return `${years} ${years === 1 ? 'year' : 'years'}`
    } else {
      return `${years} ${years === 1 ? 'year' : 'years'} ${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`
    }
  }
}
