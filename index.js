let counter = 0;

const unfollowMainFlow = () => {
    
    console.log('Counter', counter);
    let followingsButtons = document.getElementsByTagName('button');
    let unfollowsPool = [];
    let unfollowAction;
    let auxUnfollowAction;
    let ALL;
    let max = 500;
    let completed = 0;

    followingsButtons = document.getElementsByTagName('button');
    unfollowsPool = [];
    unfollowAction;
    auxUnfollowAction;
    ALL = followingsButtons.length;
    max = 500;
    completed = 0;

    for (let i = 0; i < ALL; ++i) {
        const button = followingsButtons[i];
        if (button.innerHTML.includes('Following')) {
            const randomTimeoutForUnfollow = Math.floor((Math.random() * 60) + 58) * 1000 + i * 500;
            console.log('Following button!');

            const unfollow = {
                buttonElement: button,
                timeout: randomTimeoutForUnfollow
            };

            unfollowsPool.push(unfollow);
        }
    }

    console.log('ALL SIZE', ALL)

    auxUnfollowAction = (unfollow, index) => {
        const timer = Math.floor((Math.random() * 10) + 1) * 1000 + Math.floor((Math.random() * 1000) + Math.floor((Math.random() * 2000)));
        setTimeout(() => {
            if (unfollow) {
                console.log('try to unfollow');
                unfollow.click();
                console.log('unfollow completed');
                ++completed;
            }
            console.log('timer', timer, index)
            console.log('completed', completed, '/', ALL)
        }, timer);
    }

    unfollowAction = (unfollow, unfollowTimeout, i) => {
        setTimeout(() => {
            const unfollowButtonElement = unfollow.buttonElement;
            unfollowButtonElement.scrollIntoView(true);
            console.log('Clicking unfollow button');
            unfollowButtonElement.click();
            console.log('Clicked. Continuing digesting unfollow pool', i, '/', ALL);
            const followingButtons = document.getElementsByClassName('aOOlW -Cab_   ');
            auxUnfollowAction(followingButtons[0], i);
        }, unfollowTimeout);
    }

    for (let i = 0; (i < max && i < unfollowsPool.length); ++i) {
        const unfollow = unfollowsPool[i];
        const unfollowTimeout = unfollow.timeout;
        unfollowAction(unfollow, unfollowTimeout, i);
    }
}

    ; (() => {

        unfollowMainFlow();

    })()

setInterval(function () {

    ; (() => {
        unfollowMainFlow();
    })()

}, 1000 * 60 * 9);

