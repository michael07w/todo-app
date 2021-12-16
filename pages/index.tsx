import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import classNames from 'classnames'

const Home: NextPage = () => {

    // Manages addition of new items to list
    const [todoItem, setTodoItem] = useState("")

    // Manages items in list
    const [items, setItems] = useState([
        {
            id: "0",
            message: "Brush teeth",
            done: false
        }
    ])

    // Add items to list
    const handleAdd = () => {
        // todoItem evaluates to false if it is an empty string
        if (todoItem) {
            setItems([
                {
                    id: uuidv4(),
                    message: todoItem,
                    done: false
                }, // Add newly-entered item into list of items
                ...items
            ])

            // Clear text from field
            setTodoItem("")
        }
    }

    // Track which items have been completed
    const handleToggle = (id: string) => {
        // Iterate through items and update their done status
        const _items = items.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    done: !item.done
                }
            }
            return item
        })

        setItems(_items)
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Todo App</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Please enter your tasks below.
                </h1>
                <br />

                <h2>To-Do:</h2>
                <input type="text" value={todoItem} onChange={(e) => setTodoItem(e.target.value)} />
                <button type="button" onClick={handleAdd}>Add</button>

                <ul>
                    {items.map(({ id, message, done}) => {
                        <li
                            key={id}
                            onClick={() => handleToggle(id)}
                            className={classNames("item", { done })}
                        >
                            {message}
                        </li>
                    })}
                </ul>
            </main>
        </div>
    )
}

export default Home