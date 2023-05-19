const { I , locators} = inject();

module.exports = {
    arrow:{
        right:'~bottomNavigation_IconArrowRightButton',
        left:'~bottomNavigation_IconArrowRightButton',
        leftHeader:'~buttonLeft_header'
    },

   passOnboarding() {
        I.click(this.arrow.right)
        I.click(this.arrow.right)
        I.click(this.arrow.right)
    },
}
