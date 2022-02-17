function hoverCalendarItemHandler() {
    const calendarItems = document.querySelectorAll('.calendar_table_item');    

    const eventsBoxDate = document.querySelector('.calendar_col2 h3');
    const eventsBoxCategories = document.querySelectorAll('.calendar_category');

    calendarItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const dataDate = item?.dataset['date'];
            const dataMen = {name: 'Muži', events: item?.dataset['men']};
            const dataWomen = {name: 'Ženy', events: item?.dataset['women']};
            const dataYouth =  {name: 'Mládež', events: item?.dataset['youth']};
            const dataJuniors =  {name: 'Junioři', events: item?.dataset['juniors']};

            const dataCategory = [dataMen, dataWomen, dataYouth, dataJuniors];

            eventsBoxDate.textContent = dataDate;

            eventsBoxCategories.forEach((category, index) => {
                if (dataCategory[index].events) {
                    const categoryTitle = category.querySelector('h4');
                    categoryTitle.textContent = dataCategory[index].name;
                    category.style.display = 'block';

                    const events = dataCategory[index].events.split(', ');
                    for (eventItem of events) {
                        const liElement = document.createElement('li');
                        liElement.textContent = eventItem;

                        category.querySelector('.calendar_category_events').appendChild(liElement);
                    }
                } else {
                    category.style.display = 'none';
                }
            })

        }) 

        item.addEventListener('mouseleave', () => {
            const eventsContainers = document.querySelectorAll('.calendar_category_events');

            for (eventContainer of eventsContainers) {
                eventContainer.replaceChildren();
            }
        })
    })

}

hoverCalendarItemHandler();