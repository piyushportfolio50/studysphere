 document.addEventListener('DOMContentLoaded', function() {
            // Sample data - in a real app, this would come from an API
            const studyMaterials = [
                { id: 1, class: '4', subject: 'mathematics', title: 'Mathematics Basics', description: 'Fundamental concepts of mathematics for Class 6 students.', file: 'math_class6_basics.pdf' },
                { id: 2, class: '4', subject: 'EVS', title: 'Environmental studies', description: 'Basic science concepts covering physics, chemistry and biology.', file: 'science_class6_intro.pdf' },
                { id: 3, class: '4', subject: 'english', title: 'English Grammar', description: 'Essential grammar rules and exercises for Class 6.', file: 'english_class6_grammar.pdf' },
                { id: 4, class: '4', subject: 'hindi', title: 'Hindi Vyakaran', description: 'Basic Hindi grammar and composition for beginners.', file: 'hindi_class6_vyakaran.pdf' },
                
                { id: 5, class: '5', subject: 'social-science', title: 'Our Past', description: 'Introduction to history and social studies for Class 6.', file: 'social_class6_history.pdf' },
                { id: 6, class: '5', subject: 'sanskrit', title: 'Sanskrit Basics', description: 'Beginner level Sanskrit lessons and exercises.', file: 'sanskrit_class6_basics.pdf' },
                { id: 7, class: '5', subject: 'mathematics', title: 'Algebra Basics', description: 'Introduction to algebraic concepts for Class 7.', file: 'math_class7_algebra.pdf' },
                { id: 8, class: '5', subject: 'hindi', title: 'Physics Fundamentals', description: 'Basic physics principles and experiments.', file: 'science_class7_physics.pdf' },
                { id: 9, class: '5', subject: 'english', title: 'Literature Guide', description: 'English literature reading and comprehension.', file: 'english_class7_literature.pdf' },

                { id: 10, class: '6', subject: 'mathematics', title: 'Geometry Concepts', description: 'Geometric shapes, theorems and problems.', file: 'math_class8_geometry.pdf' },
                { id: 11, class: '6', subject: 'science', title: 'Chemistry Basics', description: 'Introduction to chemical elements and reactions.', file: 'science_class8_chemistry.pdf' },
                { id: 12, class: '6', subject: 'english', title: 'Advanced Algebra', description: 'Polynomials, equations and advanced algebraic concepts.', file: 'math_class9_algebra.pdf' },
                { id: 13, class: '6', subject: 'social-science', title: 'Biology Essentials', description: 'Cell structure, tissues and basic biology.', file: 'science_class9_biology.pdf' },
                { id: 14, class: '6', subject: 'hindi', title: 'Trigonometry', description: 'Trigonometric functions, identities and problems.', file: 'math_class10_trigonometry.pdf' },
                { id: 15, class: '6', subject: 'sanskrit', title: 'Physics Advanced', description: 'Light, electricity and magnetism concepts.', file: 'science_class10_physics.pdf' },
       
                { id: 16, class: '7', subject: 'mathematics', title: 'Geometry Concepts', description: 'Geometric shapes, theorems and problems.', file: 'math_class8_geometry.pdf' },
                { id: 17, class: '7', subject: 'science', title: 'Chemistry Basics', description: 'Introduction to chemical elements and reactions.', file: 'science_class8_chemistry.pdf' },
                { id: 18, class: '7', subject: 'english', title: 'Advanced Algebra', description: 'Polynomials, equations and advanced algebraic concepts.', file: 'math_class9_algebra.pdf' },
                { id: 19, class: '7', subject: 'social-science', title: 'Biology Essentials', description: 'Cell structure, tissues and basic biology.', file: 'science_class9_biology.pdf' },
                { id: 20, class: '7', subject: 'hindi', title: 'Trigonometry', description: 'Trigonometric functions, identities and problems.', file: 'math_class10_trigonometry.pdf' },
                { id: 21, class: '7', subject: 'sanskrit', title: 'Physics Advanced', description: 'Light, electricity and magnetism concepts.', file: 'science_class10_physics.pdf' },
       
                { id: 22, class: '8', subject: 'mathematics', title: 'Geometry Concepts', description: 'Geometric shapes, theorems and problems.', file: 'math_class8_geometry.pdf' },
                { id: 23, class: '8', subject: 'science', title: 'Chemistry Basics', description: 'Introduction to chemical elements and reactions.', file: 'science_class8_chemistry.pdf' },
                { id: 24, class: '8', subject: 'english', title: 'Advanced Algebra', description: 'Polynomials, equations and advanced algebraic concepts.', file: 'math_class9_algebra.pdf' },
                { id: 25, class: '8', subject: 'social-science', title: 'Biology Essentials', description: 'Cell structure, tissues and basic biology.', file: 'science_class9_biology.pdf' },
                { id: 26, class: '8', subject: 'hindi', title: 'Trigonometry', description: 'Trigonometric functions, identities and problems.', file: 'math_class10_trigonometry.pdf' },
                { id: 27, class: '8', subject: 'sanskrit', title: 'Physics Advanced', description: 'Light, electricity and magnetism concepts.', file: 'science_class10_physics.pdf' },
       
            ];

            // Subject icons mapping
            const subjectIcons = {
                'mathematics': 'fas fa-square-root-alt',
                'science': 'fas fa-flask',
                'english': 'fas fa-book-open',
                'hindi': 'fas fa-language',
                'social-science': 'fas fa-globe-asia',
                'sanskrit': 'fas fa-om'
            };

            const container = document.getElementById('subjects-container');
            const classSelect = document.getElementById('class-select');
            const subjectSelect = document.getElementById('subject-select');
            const loader = document.querySelector('.loader');

            // Initial render
            renderMaterials(studyMaterials);

            // Filter event listeners
            classSelect.addEventListener('change', filterMaterials);
            subjectSelect.addEventListener('change', filterMaterials);

            function filterMaterials() {
                const selectedClass = classSelect.value;
                const selectedSubject = subjectSelect.value;
                
                // Show loader
                loader.style.display = 'block';
                container.innerHTML = '';
                
                // Simulate loading delay for better UX
                setTimeout(() => {
                    let filteredMaterials = [...studyMaterials];
                    
                    if (selectedClass !== 'all') {
                        filteredMaterials = filteredMaterials.filter(material => material.class === selectedClass);
                    }
                    
                    if (selectedSubject !== 'all') {
                        filteredMaterials = filteredMaterials.filter(material => material.subject === selectedSubject);
                    }
                    
                    renderMaterials(filteredMaterials);
                    loader.style.display = 'none';
                    
                    // Smooth scroll to results
                    if (filteredMaterials.length > 0) {
                        container.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 500);
            }

            function renderMaterials(materials) {
                container.innerHTML = '';
                
                if (materials.length === 0) {
                    container.innerHTML = `
                        <div class="no-results">
                            <i class="fas fa-file-alt"></i>
                            <p>No study materials found matching your criteria.</p>
                        </div>
                    `;
                    return;
                }
                
                materials.forEach((material, index) => {
                    const card = document.createElement('div');
                    card.className = 'subject-card';
                    card.style.animationDelay = `${index * 0.1}s`;
                    
                    // Add visible class after a delay for staggered animation
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, 100 + index * 100);
                    
                    card.innerHTML = `
                        <div class="subject-header">
                            <div class="subject-icon">
                                <i class="${subjectIcons[material.subject]}"></i>
                            </div>
                            <h3 class="subject-title">${material.title}</h3>
                            <div class="subject-class">Class ${material.class}</div>
                        </div>
                        <div class="subject-body">
                            <p class="subject-desc">${material.description}</p>
                            <a href="#" class="download-btn" data-file="${material.file}">
                                <i class="fas fa-download"></i> Download Notes
                            </a>
                        </div>
                    `;
                    
                    container.appendChild(card);
                });
                
                // Add download event listeners
                document.querySelectorAll('.download-btn').forEach(btn => {
                    btn.addEventListener('click', function(e) {
                        e.preventDefault();
                        const file = this.getAttribute('data-file');
                        downloadFile(file);
                    });
                });
            }

            function downloadFile(filename) {
                // In a real app, this would link to your actual files
                // For demo purposes, we'll just show an alert
                alert(`Downloading: ${filename}\n\nIn a real application, this would start the file download.`);
                
                // Animation for download button
                const btn = event.target.closest('.download-btn');
                btn.innerHTML = '<i class="fas fa-check"></i> Download Started';
                btn.style.backgroundColor = '#4CAF50';
                
                setTimeout(() => {
                    btn.innerHTML = '<i class="fas fa-download"></i> Download Notes';
                    btn.style.backgroundColor = '';
                }, 2000);
            }

            // Intersection Observer for card animations
            const observerOptions = {
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.subject-card').forEach(card => {
                observer.observe(card);
            });
        });