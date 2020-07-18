new Vue({
    el: '#app',
    data: {
        guestListTitle: 'Guest List',
        event: {
            eventDate: 'August 14th - 16th',
            eventTitle: 'Summer Festival!',
            eventDescription: "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!"
        },
        newNameText: '',
        guestName: [],
        formSubmitClass: "",
        appStyles: {
            marginTop: '25px',
        },
        eventCapacity: 25,
        eventCapacityPercentage: 0    
    },
    methods: {
        formSubmitted: function() {
            if(this.newNameText.length > 0 && this.eventCapacityPercentage < 100) {
                this.guestName.push(this.newNameText)
                this.newNameText = ''
                this.formSubmitClass = "submitted"
                this.eventCapacityPercentage = this.guestName.length / (this.eventCapacity / 100)
            }
        }
    }
})