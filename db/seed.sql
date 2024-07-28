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
    manager_id,
    is_manager
    ) VALUES 
    ('Kevin', 'Durmala', 1, null, true),
    ('Lynn', 'Nuccio', 2, null, true),
    ('Skylar', 'Olsen', 3, 2, false),
    ('Sara', 'Brown', 4, 2, false),
    ('Justine', 'Reber', 5, 2, false),
    ('Alex', 'Madson', 6, 2, false),
    ('Julie', 'Ann', 7, 2, false),
    ('Levon', 'Benjamin', 8, 2, false),
    ('Shea', 'Violet', 9, 2, false),
    ('Nick', 'Graham', 10, 2, false);


