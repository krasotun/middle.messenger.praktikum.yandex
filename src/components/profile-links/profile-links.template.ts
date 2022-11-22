export default `
ul.profile__links-list
	each val in linkList
		li.profile__list-item
			a.profile__link(href=val.link)=val.text
	li.profile__list-item
		p.profile__link_clickable Выход`;
