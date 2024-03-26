import Link from 'next/link'
import React from 'react'

const Category = () => {
  return (
    <section>
        <div>
            <ul>
              <li>
                <Link href={''}>
                  <button>Action</button>
                </Link>
              </li>
              <li>
                <Link href={''}>
                  <button>Advanture</button>
                </Link>
              </li>
              <li>
                <Link href={''}>
                  <button>Animation</button>
                </Link>
              </li>
              <li>
                <Link href={''}>
                  <button>Drama</button>
                </Link>
              </li>
              <li>
                <Link href={''}>
                  <button>Comedy</button>
                </Link>
              </li>
            </ul>
        </div>
    </section>
  )
}

export default Category