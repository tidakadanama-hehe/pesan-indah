// Interaksi minimal untuk website
document.addEventListener('DOMContentLoaded', function() {
    // Elemen interaksi
    const revealBtn = document.getElementById('revealBtn');
    const saveBtn = document.getElementById('saveBtn');
    const refreshBtn = document.getElementById('refreshBtn');
    const messageDisplay = document.getElementById('messageDisplay');
    
    // Data pesan alternatif
    const messages = [
        {
            title: "Tentang Ketulusan",
            content: "Hal terbaik seringkali datang tanpa pemberitahuan, seperti halaman ini yang sengaja dibuat sederhana namun penuh perhatian.",
            footer: "Kesederhanaan adalah bentuk keanggunan tertinggi."
        },
        {
            title: "Tentang Makna",
            content: "Tidak semua yang berharga perlu ditampilkan. Kadang, yang paling berarti justru yang disimpan dengan rapi.",
            footer: "Nilai sejati tak perlu pengakuan publik."
        },
        {
            title: "Tentang Perhatian",
            content: "Memberi perhatian tidak harus dengan hal besar. Terkadang, sebuah ruang digital kecil yang dibuat khusus sudah cukup bermakna.",
            footer: "Detail kecil seringkali yang paling berarti."
        }
    ];
    
    // Fungsi untuk menampilkan pesan
    revealBtn.addEventListener('click', function() {
        // Ambil pesan acak
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        // Update konten
        const displayContent = messageDisplay.querySelector('.display-content');
        displayContent.innerHTML = `
            <h3><i class="fas fa-comment"></i> ${randomMessage.title}</h3>
            <p>${randomMessage.content}</p>
            <p class="display-footer">${randomMessage.footer}</p>
        `;
        
        // Tampilkan pesan
        if (messageDisplay.classList.contains('hidden')) {
            messageDisplay.classList.remove('hidden');
            messageDisplay.style.animation = 'none';
            setTimeout(() => {
                messageDisplay.style.animation = 'fadeIn 0.3s ease-out';
            }, 10);
        }
        
        // Scroll ke pesan
        messageDisplay.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Update teks tombol
        const originalText = revealBtn.querySelector('.btn-text').textContent;
        revealBtn.querySelector('.btn-text').textContent = 'Pesan Lain';
        
        // Kembalikan teks setelah 3 detik
        setTimeout(() => {
            revealBtn.querySelector('.btn-text').textContent = originalText;
        }, 3000);
    });
    
    // Fungsi untuk simpan (hanya efek visual)
    saveBtn.addEventListener('click', function() {
        // Efek visual sederhana
        saveBtn.style.backgroundColor = 'var(--accent-light)';
        saveBtn.style.borderColor = 'var(--accent-color)';
        saveBtn.style.color = 'var(--accent-color)';
        
        const originalText = saveBtn.querySelector('.btn-text').textContent;
        saveBtn.querySelector('.btn-text').textContent = 'Tersimpan';
        
        // Reset setelah 2 detik
        setTimeout(() => {
            saveBtn.style.backgroundColor = '';
            saveBtn.style.borderColor = '';
            saveBtn.style.color = '';
            saveBtn.querySelector('.btn-text').textContent = originalText;
        }, 2000);
        
        // Sembunyikan pesan jika terbuka
        messageDisplay.classList.add('hidden');
    });
    
    // Fungsi untuk muat ulang
    refreshBtn.addEventListener('click', function() {
        // Efek visual
        refreshBtn.style.transform = 'rotate(180deg)';
        refreshBtn.style.transition = 'transform 0.5s ease';
        
        // Reset dan scroll ke atas
        setTimeout(() => {
            refreshBtn.style.transform = '';
            messageDisplay.classList.add('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 500);
    });
    
    // Efek hover pada kartu kata
    const wordCards = document.querySelectorAll('.word-card');
    wordCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.word-icon i');
            if (icon) {
                icon.style.transform = 'scale(1.1)';
                icon.style.transition = 'transform 0.2s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.word-icon i');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });
    
    // Tambahkan tanggal pembuatan di footer secara otomatis
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('id-ID', options);
    
    const footerNote = document.querySelector('.footer-note');
    if (footerNote) {
        footerNote.textContent += ` • Dibuat pada ${formattedDate}`;
    }
    
    // Efek scroll halus untuk semua anchor
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});