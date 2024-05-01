export default function MenuItem() {
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-black/25 transition-all">
            <img src="/pizza.png" alt="pizza" />
            <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
            <p className="text-gray-500 text-sm"></p>
        </div>
    );
}