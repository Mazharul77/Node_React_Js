let newYearPlan = ['CEO', '1', 'Researcher', 2026, 'Master', 17, 'Immigrant', 'Momin', 'The Leader']
console.log("Original Plan:", newYearPlan)
sliced_Plan = newYearPlan.slice(0, 3)
console.log("The sliced plan:", sliced_Plan, "\nwhereas original:", newYearPlan)
spliced_Plan = newYearPlan.splice(0, 3)
console.log("The spliced plan", spliced_Plan, "\nwhereas also changed the original skiping the splices:", newYearPlan)
