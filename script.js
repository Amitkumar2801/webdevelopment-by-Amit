function greet(name) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] Hello, ${name}!`);
}

greet('World');