import { relations, sql } from 'drizzle-orm'
import { sqliteTable, integer, text, primaryKey } from 'drizzle-orm/sqlite-core'

// UTILS
const createdAt = () =>
  text('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull()

// USERS
export const users = sqliteTable("users", {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  createdAt: createdAt()
})

export const usersRelations = relations(users, ({ many }) => ({
  usersProjects: many(usersProjects),
  tasks: many(tasks)
}))

// PROJECTS
export const projects = sqliteTable("projects", {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  createdAt: createdAt()
})

export const projectsRelations = relations(projects, ({ many }) => ({
  usersProjects: many(usersProjects),
  tasks: many(tasks)
}))

// TASKS
export const tasks = sqliteTable("tasks", {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  status: text('status'),
  projectId: integer('projectId').notNull().references(() => projects.id),
  userId: integer('userId').notNull().references(() => users.id),
  createdAt: createdAt()
})

export const tasksRelations = relations(tasks, ({ one }) => ({
  projects: one(projects, {
    fields: [tasks.projectId],
    references: [projects.id]
  }),
  user: one(users, {
    fields: [tasks.userId],
    references: [users.id]
  })
}))


// JOINS
export const usersProjects = sqliteTable("users_projects", {
  userId: integer('userId').notNull().references(() => users.id),
  projectId: integer('projectId').notNull().references(() => projects.id)
},(t) => ({pk: primaryKey({columns: [t.userId, t.projectId]})}))

export const usersProjectsRelations = relations(usersProjects, ({ one }) => ({
  user: one(users, {
    fields: [usersProjects.userId],
    references: [users.id]
  }),
  project: one(projects, {
    fields: [usersProjects.projectId],
    references: [projects.id]
  })
}))
