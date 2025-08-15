body {
    font-family: 'Inter', sans-serif;
}
.card {
    background-color: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
                0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease-in-out;
}
.btn {
    display: inline-block;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    transition: background-color 0.3s, transform 0.2s;
    cursor: pointer;
    text-align: center;
}
.btn-primary {
    background-color: #4f46e5;
    color: white;
}
.btn-primary:hover {
    background-color: #4338ca;
    transform: translateY(-2px);
}
.option-btn {
    display: block;
    width: 100%;
    text-align: left;
    padding: 1rem;
    margin-bottom: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    background-color: #f9fafb;
    transition: all 0.2s ease;
}
.option-btn:hover {
    background-color: #f3f4f6;
    border-color: #6366f1;
}
.option-btn.selected {
    background-color: #e0e7ff;
    border-color: #4f46e5;
    font-weight: 600;
}
