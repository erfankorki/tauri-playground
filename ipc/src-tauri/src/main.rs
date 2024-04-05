// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[tauri::command]
fn fb(n: usize) -> String {
    let mut results: Vec<i64> = vec![];
    results.push(1);
    results.push(1);
    for i in 2..n {
        results.push(results[i - 1] + results[i - 2]);
    }
    format!("{}", results[n - 1])
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![fb])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
