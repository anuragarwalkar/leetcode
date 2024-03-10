var findMaximizedCapital = function(k, W, Profits, Capital) {
    // Create a list of projects with their profits and capital requirements
    const projects = [];
    for (let i = 0; i < Profits.length; i++) {
        projects.push({ profit: Profits[i], capital: Capital[i] });
    }
  
    // Sort the projects by their capital requirements (ascending order)
    projects.sort((a, b) => a.capital - b.capital);
  
    // Iterate 'k' times to find the maximum capital
    for (let i = 0; i < k; i++) {
        let maxProfit = 0;
        let index = -1;
  
        // Iterate through the projects to find the one with the highest profit
        for (let j = 0; j < projects.length; j++) {
            // Check if the capital requirement of the project is less than or equal to current capital 'W'
            if (projects[j].capital <= W) {
                // Update maxProfit and index if profit is higher
                if (projects[j].profit > maxProfit) {
                    maxProfit = projects[j].profit;
                    index = j;
                }
            } else {
                // No need to continue searching if capital requirement exceeds current capital 'W'
                break;
            }
        }
  
        // If no project is found that can be completed, break the loop
        if (index === -1) break;
  
        // Update the current capital by adding the profit from the selected project
        W += maxProfit;
  
        // Remove the selected project from the list of projects
        projects.splice(index, 1);
    }
  
    // Return the final capital
    return W;
  };
  
  findMaximizedCapital(2, 0, [1,2,3], [0,1,1])