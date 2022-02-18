function scrollHandler(overlay) {
    if (window.pageYOffset > 50 && window.innerWidth < 1330 && window.innerWidth > 768) {
        overlay.classList.add('active') 
    } else {
        overlay.classList.remove('active') 
    }
}

function showCurrentDayEvents(eventsBoxDate, eventsBoxCategories) {
    const currentDayItem = document.querySelector('.calendar_table_item.currentDay');

    const dataDate = currentDayItem?.dataset['date'];
    const dataMen = {name: 'Muži', events: currentDayItem?.dataset['men']};
    const dataWomen = {name: 'Ženy', events: currentDayItem?.dataset['women']};
    const dataYouth =  {name: 'Mládež', events: currentDayItem?.dataset['youth']};
    const dataJuniors =  {name: 'Junioři', events: currentDayItem?.dataset['juniors']};

    const dataCategory = [dataMen, dataWomen, dataYouth, dataJuniors];

    eventsBoxDate.textContent = dataDate;

    eventsBoxCategories?.forEach((category, index) => {
        if (dataCategory[index].events) {
            const categoryTitle = category?.querySelector('h4');
            categoryTitle.textContent = dataCategory[index].name;
            category.style.display = 'block';

            const events = dataCategory[index].events.split(', ');
            console.log(events)
            for (eventItem of events) {
                const liElement = document.createElement('li');
                liElement.textContent = eventItem;

                category?.querySelector('.calendar_category_events').appendChild(liElement);
            }
        } else {
            category.style.display = 'none';
        }
    })
}

function showEventsHandler(item, eventsBoxDate, eventsBoxCategories) {
    const eventsContainers = document.querySelectorAll('.calendar_category_events');

    for (eventContainer of eventsContainers) {
        eventContainer?.replaceChildren();
    }

    const dataDate = item?.dataset['date'];
    const dataMen = {name: 'Muži', events: item?.dataset['men']};
    const dataWomen = {name: 'Ženy', events: item?.dataset['women']};
    const dataYouth =  {name: 'Mládež', events: item?.dataset['youth']};
    const dataJuniors =  {name: 'Junioři', events: item?.dataset['juniors']};

    const dataCategory = [dataMen, dataWomen, dataYouth, dataJuniors];

    eventsBoxDate.textContent = dataDate;

    eventsBoxCategories?.forEach((category, index) => {
        if (dataCategory[index].events) {
            const categoryTitle = category?.querySelector('h4');
            categoryTitle.textContent = dataCategory[index].name;
            category.style.display = 'block';

            const events = dataCategory[index].events.split(', ');
            for (eventItem of events) {
                const liElement = document.createElement('li');
                liElement.textContent = eventItem;

                category?.querySelector('.calendar_category_events').appendChild(liElement);
            }
        } else {
            category.style.display = 'none';
        }
    })
}

function hoverCalendarItemHandler() {
    const calendarItems = document.querySelectorAll('.calendar_table_item');    
    const overlay = document.querySelector('.onScroll_overlay');

    const eventsBoxDate = document.querySelector('.calendar_col2 h3');
    const eventsBoxCategories = document.querySelectorAll('.calendar_category');

    showCurrentDayEvents(eventsBoxDate, eventsBoxCategories);

    window.addEventListener('scroll', () => scrollHandler(overlay))

    calendarItems?.forEach(item => {
        if (window.innerWidth > 768) {
            item?.addEventListener('mouseover', () => showEventsHandler(item, eventsBoxDate, eventsBoxCategories)) 
        } else {
            item?.addEventListener('click', () => showEventsHandler(item, eventsBoxDate, eventsBoxCategories)) 
        }
    })
}

hoverCalendarItemHandler();