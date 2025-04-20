const http = require("http");
const fs = require("fs");
const portNo = 3000;

const server = http.createServer((req, res) => {
	// console.log(req.url, req.method);
	if (req.url === '/') {
		res.setHeader('Content-Type', 'text/html');
		res.write(`
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<title>GGC Layyah</title>
			</head>
			<body>
				<center>
					<h2>Welcome to the Home page...</h2>
					<form action="/submit" method="post">
						<input type="text" name="username" id="username" placeholder="Enter your name"> <br> <br>
						<label for="gender">Gender:</label>
						<input type="radio" name="gender" id="male" value="male">
						<label for="male">Male</label>
						<input type="radio" name="gender" id="female" value="female">
						<label for="female">Female</label> <br><br>
						<button type="submit">Submit</button>
					</form>
				</center>
			</body>
			</html>
			`);
		return res.end();
	} else if (req.url.toLowerCase() == '/submit' && req.method == 'POST') {
		const requestBody = [];
		req.on("data", (chunk) => {
			requestBody.push(chunk);
		});
		req.on("end", () => {
			const fullRequestBody = Buffer.concat(requestBody).toString();
			const params = new URLSearchParams(fullRequestBody);
			const requestBodyToObject = Object.fromEntries(params);
			fs.writeFileSync('./users.json', JSON.stringify(requestBodyToObject));
		});
		res.statusCode = 302;
		res.setHeader("Location", "/");
		return res.end();
	}

	res.setHeader('Content-Type', 'text/html');
	res.write(`
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>GGC Layyah</title>
		</head>
		<body>
			<center>
				<h2>Welcome to the GGC Layyah...</h2>
				<h3>This website is under construction...</h3>
			</center>
		</body>
		</html>
		`);
	res.end();
});

server.listen(portNo, () => {
	console.log(`Success... server created at http://localhost:${portNo}`);
})