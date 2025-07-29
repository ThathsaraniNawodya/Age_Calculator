function calculateAge() {
    const dob = document.getElementById("dob").value;
    if (!dob) {
      alert("Please select a valid Date of Birth.");
      return;
    }
  
    const birthDate = new Date(dob);
    const today = new Date();
  
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
  
    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    document.getElementById("result").innerHTML =
      `You are ${years} years, ${months} months, and ${days} days old.`;
  }
  