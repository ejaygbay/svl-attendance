const stemView = (req, res) => {
    res.render('stem-courses', {
        page: 'courses'
    });
}

// enable selection of desire course card 
const selectedCourse = (req, res) => {
    let course = req.params.course;
    console.log(course);

    if (course === 'computer-basics') {
        // locate directory and render the outline file for the selected course 
        res.render('gcf-content/computer-basics/course-outline', {
            page: 'courses'
        });
    }
}

// displays content of each outline items of a selected course 
const selectCourseOutlineContent = (req, res)=>{
    let outline_item = req.params.outline_item;
    console.log(outline_item);


    if(outline_item === 'about') {
        // locate directory and render the outline file for the selected course 
        res.render('gcf-content/computer-basics/about-this-tutorial/lesson', {
            page: 'courses'
        });
    }
    else if(outline_item === 'what_is_a_computer') {
        // locate directory and render the outline file for the selected course 
        res.render('gcf-content/computer-basics/what-is-a-computer/lesson', {
            page: 'courses'
        });
    }
    else if(outline_item === 'basic_parts_of_a_computer') {
        // locate directory and render the outline file for the selected course 
        res.render('gcf-content/computer-basics/basic-parts-of-a-computer/lesson', {
            page: 'courses'
        });
    }
    else if(outline_item === 'buttons_and_ports_on_a_computer') {
        // locate directory and render the outline file for the selected course 
        res.render('gcf-content/computer-basics/buttons-and-ports-on-a-computer/lesson', {
            page: 'courses'
        });
    }
    else if(outline_item === 'inside_a_computer') {
        // locate directory and render the outline file for the selected course 
        res.render('gcf-content/computer-basics/inside-a-computer/lesson', {
            page: 'courses'
        });
    }
    else if(outline_item === 'laptop_computers') {
        // locate directory and render the outline file for the selected course 
        res.render('gcf-content/computer-basics/laptop-computers/lesson', {
            page: 'courses'
        });
    }
    else if(outline_item === 'mobile_devices') {
        // locate directory and render the outline file for the selected course 
        res.render('gcf-content/computer-basics/mobile-devices/lesson', {
            page: 'courses'
        });
    }
    else if(outline_item === 'understanding_operating_systems') {
        // locate directory and render the outline file for the selected course 
        res.render('gcf-content/computer-basics/understanding-operating-systems/lesson', {
            page: 'courses'
        });
    }
    else if(outline_item === 'understanding_applications') {
        // locate directory and render the outline file for the selected course 
        res.render('gcf-content/computer-basics/understanding-applications/lesson', {
            page: 'courses'
        });
    }
    else if(outline_item === 'setting_up_a_computer') {
        // locate directory and render the outline file for the selected course 
        res.render('gcf-content/computer-basics/setting-up-a-computer/lesson', {
            page: 'courses'
        });
    }
    else if(outline_item === 'start_with_your_first_computer') {
        // locate directory and render the outline file for the selected course 
        res.render('gcf-content/computer-basics/getting-started-with-your-first-computer/lesson', {
            page: 'courses'
        });
    }
    else if(outline_item === 'getting_to_know_the_os') {
        // locate directory and render the outline file for the selected course 
        res.render('gcf-content/computer-basics/getting-to-know-the-os/lesson', {
            page: 'courses'
        });
    }
    else if(outline_item === 'connecting_to_the_internet') {
        // locate directory and render the outline file for the selected course 
        res.render('gcf-content/computer-basics/connecting-to-the-internet/lesson', {
            page: 'courses'
        });
    }
    else if(outline_item === 'getting_started_with_the_internet') {
        // locate directory and render the outline file for the selected course 
        res.render('gcf-content/computer-basics/getting-started-with-the-internet/lesson', {
            page: 'courses'
        });
    }
    else if(outline_item === 'understanding_the_cloud') {
        // locate directory and render the outline file for the selected course 
        res.render('gcf-content/computer-basics/understanding-the-cloud/lesson', {
            page: 'courses'
        });
    }
    else if(outline_item === 'keeping_your_computer_clean') {
        // locate directory and render the outline file for the selected course 
        res.render('gcf-content/computer-basics/keeping-your-computer-clean/lesson', {
            page: 'courses'
        });
    }
    else if(outline_item === 'protecting_your_computer') {
        // locate directory and render the outline file for the selected course 
        res.render('gcf-content/computer-basics/protecting-your-computer/lesson', {
            page: 'courses'
        });
    }
    else if(outline_item === 'creating_a-safe_workspace') {
        // locate directory and render the outline file for the selected course 
        res.render('gcf-content/computer-basics/creating-a-safe-workspace/lesson', {
            page: 'courses'
        });
    }
    else if(outline_item === 'basic_troubleshooting_techniques') {
        // locate directory and render the outline file for the selected course 
        res.render('gcf-content/computer-basics/basic-troubleshooting-techniques/lesson', {
            page: 'courses'
        });
    }
    else if(outline_item === 'how_to_use_your_computers_builtin-help') {
        // locate directory and render the outline file for the selected course 
        res.render('gcf-content/computer-basics/how-to-use-your-computers-builtin-help/lesson', {
            page: 'courses'
        });
    }
    else if(outline_item === 'learning_a_new_program') {
        // locate directory and render the outline file for the selected course 
        res.render('gcf-content/computer-basics/learning-a-new-program/lesson', {
            page: 'courses'
        });
    }
    else if(outline_item === 'bringing_your_files_with_you') {
        // locate directory and render the outline file for the selected course 
        res.render('gcf-content/computer-basics/bringing-your-files-with-you/lesson', {
            page: 'courses'
        });
    }
    else if(outline_item === 'using_accessibility_features') {
        // locate directory and render the outline file for the selected course 
        res.render('gcf-content/computer-basics/using-accessibility-features/lesson', {
            page: 'courses'
        });
    }
    else if(outline_item === 'using_accessibility_features') {
        // locate directory and render the outline file for the selected course 
        res.render('gcf-content/computer-basics/using-accessibility-features/lesson', {
            page: 'courses'
        });
    }
    
   
}

module.exports = {
    stemView,
    selectedCourse,
    selectCourseOutlineContent
    
}