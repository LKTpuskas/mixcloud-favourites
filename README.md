This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Research Spike: Automated Web Performance in the Build Pipeline

## Context:

This document outlines a research spike investigating the best approach to integrate automated web performance metrics into Mixcloud's build pipeline. The focus is on leveraging Lighthouse CI to obtain valuable performance insights early in the development process.

## Current Approach:

As a proof of concept, Lighthouse CI was implemented within a test Next.js project, demonstrating the basic functionality (https://github.com/GoogleChrome/lighthouse-ci).

To run the `lhci` report locally:
1. `npm install`
2. `npm run build`
3. `lhci autorun` (in root location)

Localhost lhci autorun example run
![image](https://github.com/LKTpuskas/mixcloud-favourites/assets/10063753/38169a83-4a7d-467c-9709-9cd35b6fd696)


## Buildkite Integration (Python Backend and Docker):

The proposed solution aims to integrate Lighthouse CI into our existing Buildkite pipeline:

1. Pipeline Step: Create a dedicated step within the Buildkite pipeline to run Lighthouse CI tests.
2. Script Execution: Use a Python script (since our backend uses Python) to execute the following steps:
   - Pull the latest Lighthouse CI Docker image.
   - Mount the project directory as a volume within the container.
   - Run the Lighthouse CI tests using appropriate commands (refer to Lighthouse CI documentation for specifics).
4. Reporting: Capture and store the generated Lighthouse reports for further analysis and visualization (e.g., upload to an artifact storage service, visualize metrics in dashboards).

## Challenges and Further Exploration:

While the Lighthouse CI Docker image (https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/recipes/docker-client/Dockerfile) seemed promising, initial attempts encountered difficulties due to limited Docker experience. Further investigation into troubleshooting and configuration is required.

## Next Steps:

Continue exploring Lighthouse CI Docker container configuration.
Develop a comprehensive Python script for Buildkite integration.
Implement unit tests for the Python script.
Evaluate alternative tools for performance testing (e.g., WebPageTest).
Document the final solution for easy deployment and maintenance.
Disclaimer:

This document reflects the initial stages of research and might require adjustments as further exploration unfolds.
