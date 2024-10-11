function main(response) {
  console.log("main");

  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("Main page");
  response.end();
}

function login(response) {
  console.log("login");

  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("login page");
  response.end();
}

let handle = {}; // key:value
handle["/"] = main;
handle["/login"] = login;

function favicon() {
  console.log("favicon");
}

handle["/favicon.ico"] = favicon;

exports.handle = handle;
