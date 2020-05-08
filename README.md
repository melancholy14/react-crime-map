This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Below you will find some information on this project.<br>

## Table of Contents

- [About](#about)
- [How to Use](#how-to-use)
- [Retrieving Data](#retrieving-data)
- [Responsive](#responsive)
- [Updating to New](#updating-to-new)
- [Sending Feedback](#sending-feedback)
- [Something Missing?](#something-missing)

## About

This project shows several types of crime which happened on specific date and location in UK through a map. In addition, you can get information on a selected crime; graphs, news, and neighbours.

You can try by clicking [here](https://melancholy14.github.io/uk-crime-map/)

## How to Use

- Search: You can search crimes by selecting range of dates and inputting a postcode. Your location which may be used instead of empty postcode is available to detect automatically if you allow this to do.
<p align='center'>
<img src='https://melancholy14.github.io/uk-crime-map/images/main.png' width='50%' alt='Main Images'>
</p>

- Select: You can select only ones you want to see amongst searched crimes by clicking checkboxes.
<p align='center'>
<img src='https://melancholy14.github.io/uk-crime-map/images/selected.png' width='50%' alt='Selected'>
</p>

- View in details: You can view a specific crime by clicking a circle which means each crime on the map.
<p align='center'>
<img src='https://melancholy14.github.io/uk-crime-map/images/graphs.png' width='49%' alt='Graphs'>
<img src='https://melancholy14.github.io/uk-crime-map/images/news.png' width='49%' alt='News'>
</p>

## Retrieving Data

Data is dealt with using RESTful API and responsed by below APIs:

- Crime: `https://data.police.uk/api`
- News: `https://content.guardianapis.com/search`
- Location: `https://open.mapquestapi.com/geocoding/v1`

## Responsive

This project supports responsive web application.

<p>
<img src='https://melancholy14.github.io/uk-crime-map/images/mobile.png' width='250' alt='Mobile'>
<img src='https://melancholy14.github.io/uk-crime-map/images/desktop.png' width='600' alt='Desktop'>
</p>

## Updating to New Releases

In cases you would like to check updates, [open the changelog](https://github.com/melancholy14/uk-crime-map/blob/master/CHANGELOG.md), find the version you’re currently on (check `package.json` in this folder if you’re not sure).

## Sending Feedback

I am always open to [your feedback](https://github.com/melancholy14/uk-crime-map/issues). Or, if you have ideas for more functionalities that should be on this page, [let me know](https://github.com/melancholy14/uk-crime-map/issues).
