import React from 'react'

function DepartmentDashboard() {
  return (
<>
<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>

<div>
    <header className="bg-gray-800 h-96 flex justify-center items-center" x-data="{ isOpen: false }">
        <section className="flex items-center justify-center" >
            <div className="text-center">
                <p className="text-xl font-medium tracking-wider text-gray-300">Lorem ipsum dolor</p>
                <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit</h2>
    
                <div className="flex justify-center mt-8">
                    <a className="px-8 py-2 text-lg font-medium text-white transition-colors duration-300 transform bg-indigo-600 rounded hover:bg-indigo-500"
                        href="#">Get In Touch</a>
                </div>
            </div>
        </section>
    </header>
    
      <footer className="border-t">
        <div className="container flex items-center justify-between px-6 py-8 mx-auto">
            <p className="text-gray-500">© 2019-2021 All Rights Reserved.</p>
            <p className="font-medium text-gray-700">Terms of Service</p>
        </div>
    </footer>
</div>
</>  
)
}

export default DepartmentDashboard