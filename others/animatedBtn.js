AnimatedBtn = (manifest) => {
    const domId = manifest.domId;
    const transitionTime = manifest.transitionTime;
    const yourFunction = manifest.yourFunction;
    const coverColor = manifest.coverColor;
    const baseColor = manifest.baseColor;
    let done;
    let yourInterval;
    let dom = document.querySelector(`${domId}`) || document.querySelector(`#${domId}`);
    dom.style.background = `linear-gradient(to right, ${coverColor} 50%, ${baseColor} 50%)`;
    dom.style.backgroundSize = '200% 100%';
    dom.style.backgroundPosition = 'right bottom';
    dom.style.cursor = 'pointer';
    dom.addEventListener('mousedown', (e) => {
        done = false;
        dom.style.transition = `all ${transitionTime / 1000}s` || 'all 1s';
        yourInterval = setInterval(()=> {
            yourFunction();
            done = true;
            clearInterval(yourInterval);
        }, transitionTime);
        dom.style.backgroundPosition = 'left bottom';
    })
    dom.addEventListener('mouseup', (e) => {
        if(done) {
            dom.style.transition = '';
        }
        clearInterval(yourInterval);
        dom.style.backgroundPosition = 'right bottom';
    });
}
