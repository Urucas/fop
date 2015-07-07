import fop from '../lib/';

describe("Fop instance test", () => {

  it("Test path -> /Users/vruno/myfile.txt", (done) => {
    let folder = fop("/Users/vruno/myfile.txt");
    if(folder != "/Users/vruno/") throw new Error("Fails, return folder:"+folder);
    done();
  });

  it("Test path -> /Users/vruno/", (done) => {
    let folder = fop("/Users/vruno/");
    if(folder != "/Users/vruno/") throw new Error("Fails, return folder:"+folder);
    done();
  });

  it("Test path -> myfile.txt", (done) => {
    let folder = fop("myfile.txt");
    if(folder != "/") throw new Error("Test fails, return folder:"+folder);
    done();
  });
  
  it("Test path -> /Users/vruno", (done) => {
    let folder = fop("/Users/vruno");
    if(folder != "/Users/") throw new Error("Test fails, return folder:"+folder);
    done();
  });
  
  it("Test path -> undefined", (done) => {
    let folder = fop();
    if(folder != "") throw new Error("Test fails, return folder:"+folder);
    done();
  });

  it("Test path -> ./", (done) => {
    let folder = fop("./");
    if(folder != "./") throw new Error("Test fails, return folder:"+folder);
    done();
  });

  it("Test path -> ./Users/vruno/", (done) => {
    let folder = fop("./Users/vruno/");
    if(folder != "./Users/vruno/") throw new Error("Test fails, return folder:"+folder);
    done();
  });


});
