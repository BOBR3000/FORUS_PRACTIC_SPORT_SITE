import { createRouter, createWebHashHistory } from 'vue-router'
import SITE_INFO from '../SPORT_SITE/src/components/SITE_INFO.vue'
import FORUM from '../SPORT_SITE/src/components/FORUM.vue'
import FORUM_THEME from '../SPORT_SITE/src/components/FORUM_THEME.vue'
import SYSTEM_INFO from '../SPORT_SITE/src/components/SYSTEM_INFO.vue'
import FORUM_THEME_ADD_DATA from '../SPORT_SITE/src/components/FORUM_THEME_ADD_DATA.vue'
import ARCHIVE_TASKS from '../SPORT_SITE/src/components/ARCHIVE_TASKS.vue'
import TASK from '../SPORT_SITE/src/components/TASK.vue'

const routes = [
	{
		path: '/',
		name: 'SITE_INFO',
		component: SITE_INFO,
	},
	{
		path: '/FORUM',
		name: 'FORUM',
		component: FORUM,
	},
	{
		path: '/FORUM_THEME',
		name: 'FORUM_THEME',
		component: FORUM_THEME,
	},
	{
		path: '/SYSTEM_INFO',
		name: 'SYSTEM_INFO',
		component: SYSTEM_INFO,
	},
	{
		path: '/FORUM_THEME_ADD_DATA',
		name: 'FORUM_THEME_ADD_DATA',
		component: FORUM_THEME_ADD_DATA,
	},
	{
		path: '/ARCHIVE_TASKS',
		name: 'ARCHIVE_TASKS',
		component: ARCHIVE_TASKS,
	},
	{
		path: '/TASK',
		name: 'TASK',
		component: TASK,
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
