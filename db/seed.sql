INSERT INTO departments (dept_name) VALUES
    ('Administration'),
    ('Teachers'),
    ('Support Staff'),
    ('Paraprofessionals'),
    ('Maintenance');

INSERT INTO roles (role_title, salary, department_id) VALUES
    ('Principal', 150000, 1),
    ('Supervisor', 135000, 1),
    ('General Ed Elementary Teacher', 60000, 2),
    ('Special Ed Elementary Teacher', 75000, 2),
    ('Teacher Assistant', 50000, 3),
    ('One:One Student Assistant', 45000, 3),
    ('Speech Language Pathologist', 80000, 4),
    ('Occupational Therapist', 100000, 4),
    ('Custodian', 60000, 5),
    ('Grounds & Maintenance', 70000, 5);

INSERT INTO employees (
    first_name, 
    last_name, 
    role_id, 
    manager_id
    ) VALUES 
    ('Kevin', 'Durmala', 1, null),
    ('Lynn', 'Nuccio', 2, null),
    ('Skylar', 'Olsen', 3, 2),
    ('Sara', 'Brown', 4, 2),
    ('Justine', 'Reber', 5, 2),
    ('Alex', 'Madson', 6, 2),
    ('Julie', 'Ann', 7, 2),
    ('Levon', 'Benjamin', 8, 2),
    ('Shea', 'Violet', 9, 2),
    ('Nick', 'Graham', 10, 2);


