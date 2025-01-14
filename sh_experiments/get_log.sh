TOKEN="ghp_******" # generate and use a token with repo and activity access right
OWNER="oferguez"
REPO="Experiments"
RUN_ID="12672477868"


curl -v -L \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer $TOKEN" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/$OWNER/$REPO/actions/runs/$RUN_ID/logs \
  --output logs.zip
  
ls -l logs.zip