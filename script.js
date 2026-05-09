  // دالة يتم تفعيلها عند الضغط على الزر
  document.getElementById('addProjectBtn').addEventListener('click', function() {
    const grid = document.getElementById('projectsGrid');

    // 1. إنشاء عنصر المشروع الجديد
    const newProject = document.createElement('div');
    newProject.classList.add('project-card');

    // --- هنا يمكنك تغيير بيانات المشروع الجديد ---
    // يمكنك تغيير رابط الصورة، الاسم، والوصف أدناه
    const imageUrl = 'https://via.placeholder.com/400/00FF00/FFFFFF?text=New+Project'; 
    const projectTitle = 'مشروع جديد';
    const projectCategory = 'تصميم / برمجة';

    // 2. وضع محتوى المشروع الجديد داخل العنصر
    newProject.innerHTML = `
        <img src="${imageUrl}" alt="${projectTitle}">
        <div class="overlay">
            <div class="content">
                <h3>${projectTitle}</h3>
                <p>${projectCategory}</p>
            </div>
        </div>`
    ;

   
    grid.appendChild(newProject);
});