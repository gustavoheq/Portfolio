function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function redirectWithAlert(url, siteName) {
    Swal.fire({
        title: 'Redirecionamento',
        text: `Você está sendo redirecionado para ${siteName}. Deseja continuar?`,
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Sim, continuar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        backdrop: true,
        allowOutsideClick: false,
    }).then((result) => {
        if (result.isConfirmed) {
            window.open(url, '_blank');
        }
    });
}