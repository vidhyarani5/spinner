process.stdout.write('hello from spinner2.js... \rheyyy\n');
let index = 100;

let spinArr = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r-   ','\r/   ','\r|   '];

for (const spin of spinArr){
  setTimeout(() => {
    process.stdout.write(spin);
  }, index);
  
  index += 300;
};
