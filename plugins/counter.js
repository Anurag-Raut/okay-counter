class Counter {
    #socket;
    #getText;
    #sendMessage;
    #membersLimit;
    #trigger;
    #counter;
  
    constructor(config = {}) {
      this.#membersLimit = config.membersLimit || 100;
      this.#trigger = config.trigger || "all";
      this.#counter = 0;
    }
  
    init(socket, getText, sendMessage) {
      this.#socket = socket;
      this.#getText = getText;
      this.#sendMessage = sendMessage;
      console.log("Counter initialized");
    }
   
  
    async process(key, message) {
      const text = this.#getText(key, message);




        
     
    //   this.#sendMessage(
    //     key.remoteJid,
    //     { text: `Okay count : ${this.#counter}` },
    //     { quoted: { key, message } }
    //   );
      try {
      
       
        const grp = await this.#socket.groupMetadata(key.remoteJid);

      if(grp.subject!=="Democratic IPD Group"){
        return;
      }


      let msg=message.conversation;
  

   
       if(msg.includes("ok") || msg.includes("Ok") || msg.includes("OK") || msg.includes("oK") ||msg.includes("Okay")|| msg.includes("okay")|| msg.includes("OKAY")){
        console.log("inside if");
        this.#counter = this.#counter + 1;
        this.#sendMessage(
            key.remoteJid,
            { text: `Okay count : ${this.#counter}` },
            { quoted: { key, message } }
          );
       }
      } catch (err) {
        console.log("ERROR in new:", err);
      }
    }
  }
  
  module.exports = Counter;
  