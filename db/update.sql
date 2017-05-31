UPDATE favcolor
SET firstname = $2, color = $3, gender = $4
WHERE userid = $1;