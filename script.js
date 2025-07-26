function navigateTo(sectionId) {
    const sections = ['homePage', 'arDashboard', 'adminConsole'];
    sections.forEach(id => {
      document.getElementById(id).classList.add('hidden');
    });
  
    document.getElementById(sectionId).classList.remove('hidden');
  }
  
  