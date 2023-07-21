import React, { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'
/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

enum Status {
  ALL = 'all',
  PENDING = 'pending',
  COMPLETED = 'completed',
}

const filterOptions = [
  { label: 'All', value: Status.ALL },
  { label: 'Pending', value: Status.PENDING },
  { label: 'Completed', value: Status.COMPLETED },
]

const Index = () => {
  const [filterStatus, setFilterStatus] = useState<Status>(Status.ALL)

  const handleTabChange = (value: string) => {
    switch (value) {
      case Status.ALL:
        setFilterStatus(Status.ALL)
        break
      case Status.PENDING:
        setFilterStatus(Status.PENDING)
        break
      case Status.PENDING:
        setFilterStatus(Status.COMPLETED)
        break
      default:
    }
  }

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
        <div className="pt-10">
          <Tabs.Root
            defaultValue={filterStatus}
            onValueChange={handleTabChange}
          >
            <Tabs.List className="flex gap-2 pb-10">
              {filterOptions.map((option, index) => (
                <Tabs.Trigger
                  key={index}
                  className="rounded-full border border-gray-200 px-6 py-3 text-sm font-bold text-gray-700 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
                  value={option.value}
                >
                  {option.label}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            {filterOptions.map((option, index) => (
              <Tabs.Content key={index} value={option.value}>
                <TodoList status={option.value} />
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
