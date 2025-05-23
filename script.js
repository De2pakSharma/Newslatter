 document.getElementById("subscribeForm").addEventListener("submit", function (e) {
      e.preventDefault();  
      const email = document.getElementById("emailInput").value.trim();
      if (email) {
        alert("Thank you for subscribing!");
        const modal = bootstrap.Modal.getInstance(document.getElementById("subscribeModal"));
        modal.hide();  
        this.reset();  
      }
    });